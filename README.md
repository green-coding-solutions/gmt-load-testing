## Load Testing for GMT APIs

This repo provides some tests for load testing the GMT API.

The files are aptly named to reflect which endpoint is tested.

All tests are done with k6s

## Running

```bash
K6_WEB_DASHBOARD=true k6 run carbondb_add.js
```

## Modifying

Modify the relevant `.js` files. URLs and POST bodies are defined in there.

## Results

Just some examples what we are looking on:

### POST /v2/carbondb/add (2000 VUs)
```log
checks.........................: 100.00% 70486 out of 70486
data_received..................: 7.8 MB  126 kB/s
data_sent......................: 29 MB   470 kB/s
http_req_blocked...............: avg=14.37µs  min=0s     med=2µs      max=4.68ms   p(90)=5µs      p(95)=7µs
http_req_connecting............: avg=9.95µs   min=0s     med=0s       max=4.63ms   p(90)=0s       p(95)=0s
http_req_duration..............: avg=296.61ms min=1.65ms med=377.03ms max=756.84ms p(90)=474.51ms p(95)=496.32ms
{ expected_response:true }...: avg=296.61ms min=1.65ms med=377.03ms max=756.84ms p(90)=474.51ms p(95)=496.32ms
http_req_failed................: 0.00%   0 out of 70486
http_req_receiving.............: avg=22.62µs  min=3µs    med=16µs     max=3.89ms   p(90)=40µs     p(95)=53µs
http_req_sending...............: avg=14.31µs  min=2µs    med=9µs      max=2.1ms    p(90)=22µs     p(95)=31µs
http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s
http_req_waiting...............: avg=296.57ms min=1.63ms med=377ms    max=756.83ms p(90)=474.47ms p(95)=496.24ms
http_reqs......................: 70486   1148.26713/s
iteration_duration.............: avg=1.29s    min=1s     med=1.37s    max=1.75s    p(90)=1.47s    p(95)=1.49s
iterations.....................: 70486   1148.26713/s
vus............................: 705     min=61             max=2000
vus_max........................: 2000    min=2000           max=2000
```


### GET /v1/runs (2000 VUs)

```log
checks.........................: 100.00% 170612 out of 170612
data_received..................: 262 MB  4.3 MB/s
data_sent......................: 18 MB   290 kB/s
http_req_blocked...............: avg=6.83µs   min=0s     med=1µs      max=5.24ms  p(90)=3µs      p(95)=4µs
http_req_connecting............: avg=4.65µs   min=0s     med=0s       max=3.2ms   p(90)=0s       p(95)=0s
http_req_duration..............: avg=530.43ms min=1.35ms med=560.15ms max=4.81s   p(90)=673.59ms p(95)=700.58ms
{ expected_response:true }...: avg=530.43ms min=1.35ms med=560.15ms max=4.81s   p(90)=673.59ms p(95)=700.58ms
http_req_failed................: 0.00%   0 out of 170612
http_req_receiving.............: avg=26.84µs  min=5µs    med=16µs     max=29.74ms p(90)=55µs     p(95)=75µs
http_req_sending...............: avg=6.4µs    min=1µs    med=3µs      max=35.98ms p(90)=9µs      p(95)=12µs
http_req_tls_handshaking.......: avg=0s       min=0s     med=0s       max=0s      p(90)=0s       p(95)=0s
http_req_waiting...............: avg=530.39ms min=1.3ms  med=560.11ms max=4.81s   p(90)=673.55ms p(95)=700.55ms
http_reqs......................: 170612  2817.18714/s
iteration_duration.............: avg=530.76ms min=1.37ms med=560.2ms  max=4.82s   p(90)=673.64ms p(95)=700.65ms
iterations.....................: 170612  2817.18714/s
vus............................: 2000    min=61               max=2000
vus_max........................: 2000    min=2000             max=2000
```
