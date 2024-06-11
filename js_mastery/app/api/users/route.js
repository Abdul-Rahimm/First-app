//APi backend route

//handle GET request for /api/users
export async function GET(request){

    const users = [
        {id: 1, name:"John"},
        {id: 3, name:"Martian"},
        {id: 2, name:"Doe"}
    ]

    //send the users as a respomnse after retrieving them
    return new Response(JSON.stringify(users))
}