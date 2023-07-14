import superagent from "superagent"

describe("API suite", function() {
  it("Check get users response status", async () => {
    const response = await superagent.get("https://reqres.in/api/users");
    expect(response.status).toBe(200)
  })
  it("Check get users amount", async () => {
    const response = await superagent.get("https://reqres.in/api/users");
    expect(response.body.data.length).toBe(6)
  })
  it("Check delete user status", async () => {
    const response = await superagent.delete("https://reqres.in/api/users").query({id: 1});
    expect(response.status).toBe(204)
  })
  it("Check create user status", async () => {
    const response = await superagent
        .post("https://reqres.in/api/users")
        .send({Name: "Boka"})
    expect(response.status).toBe(201)
  })
  it("Check create user status", async () => {
    const response = await superagent
        .post("https://reqres.in/api/users")
        .send({Name: "Boka"})
    expect(response.status).toBe(201)
  })
  it("Check created user Name", async () => {
    const expected = "Boka"
    const response = await superagent
        .post("https://reqres.in/api/users")
        .send({Name: "Boka"})
    expect(response.body.Name).toBe(expected)
  })
  it("Check update user status", async () => {
    const response = await superagent
        .put("https://reqres.in/api/users/1")
        .send({Name: "Boka"})
    expect(response.status).toBe(200)
  })  
  it("Check updated user Name", async () => {
    const expected = "Boka"
    const response = await superagent
        .put("https://reqres.in/api/users/1")
        .send({Name: "Boka"})
    expect(response.body.Name).toBe(expected)
  })
  it("Check update user status", async () => {
    const response = await superagent
        .patch("https://reqres.in/api/users/1")
        .send({Name: "Boka"})
    expect(response.status).toBe(200)
  })  
  it("Check updated user Name", async () => {
    const expected = "Boka"
    const response = await superagent
        .patch("https://reqres.in/api/users/1")
        .send({Name: "Boka"})
    expect(response.body.Name).toBe(expected)
  })
})