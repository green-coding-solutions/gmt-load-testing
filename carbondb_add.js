import http from 'k6/http'
import { check, sleep } from 'k6'

export let options = {
    stages: [
        { duration: '30s', target: 2000 },  // ramp up to 1 VU over 30 seconds
        { duration: '30s', target: 2000 },  // stay on 2000 VUs

    ],
};


export default function () {
  const headers = {
        'Content-Type': 'application/json', // Set the Content-Type header
  };

  const data_small =   [
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      }
  ]

  const data_large =   [
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      },
      {
        "type": "machine.test",
        "company": "20b269ce-cd67-4788-8614-030eaf5a0b47",
        "machine": "6662e9b9-2daa-4177-a5c3-20af79567a66",
        "project": "00000001-BCA5-451B-9E60-3A2FD07FA28D",
        "tags": ["metrics.green-coding.io"],
        "time": "4353453",
        "energy": "72139231"
      }
  ]

  const json_data = JSON.stringify(data_small)

  let res = http.post('http://api.green-coding.internal:9142/v2/carbondb/add', json_data, {headers: headers})

  check(res, { 'Response is 204': (r) => r.status === 204 })
}
