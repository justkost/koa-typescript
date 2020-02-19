import * as supertest from 'supertest'
import app from '../src'

describe('api', () => {
  const request = supertest(app.listen())

  it('<200> Home route', async () => {
    await request
      .get('/')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
  })

  it('<404> Not Found', async () => {
    await request
      .get('/qwerty')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
  })
})
