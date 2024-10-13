import http from 'k6/http'
import { check, sleep } from 'k6'

export let options = {
    stages: [
        { duration: '30s', target: 2000 },  // ramp up to 1 VU over 30 seconds
        { duration: '30s', target: 2000 },  // stay on 2000 VUs

    ],
};


export default function () {

  let res = http.get('http://api.green-coding.internal:9142/v1/runs')

  check(res, { 'Response is 200': (r) => r.status === 200 })
}
