import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";


/*************************************************************************************************************/


dotenv.config()


/*************************************************************************************************************/


const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    }
})


/*************************************************************************************************************/


const app = express()
app.use(express.json())


app.put('/user', async (req: Request, res: Response) => {
    try {
        const newUser = await createUser(
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        res.send(newUser).status(200)
    } catch (error) {
        res.send({message: error.message}).status(401)
    }
})



app.get('/user/:nickname', async (req: Request, res: Response) => {
    try {
        const result = await getUserByNickname( req.params.nickname )

        res.send(result[0]).status(200)
    } catch (error) {
        res.send({message: error.message}).status(401)
    }
})



app.put('/task', async (req: Request, res: Response) => {
    try {
        const newTask = await createTask(
            req.body.id,
            req.body.title,
            req.body.description,
            req.body.status,
            req.body.limit_date,
            req.body.creator_user_nickname
        )

        res.send(newTask).status(200)
    } catch (error) {
        res.send({message: error.message}).status(401)
    }
})



app.get('/task/:id', async (req: Request, res: Response) => {
    try {
        const result = await getTaskById( req.params.id )

        res.send(result[0]).status(200)
    } catch (error) {
        res.send({message: error.message}).status(401)
    }
})
/*************************************************************************************************************/


const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Servidor está rodando em http://localhost${address.port}`)
    } else {
        console.error(`Falha ao startar servidor`)
    }
})


/*************************************************************************************************************/




async function createUser(name: string, nickname: string, email: string): Promise<void> {
    try {
        const result = await connection.raw(`
            INSERT INTO Users VALUES (
                "${name}",
                "${nickname}",
                "${email}"
            )
        `)

        console.log(result)
    } catch (error) {
        console.log(error)    
    }
}



async function getUserByNickname(nick: string): Promise<any> {
    try {
        const result = await connection.raw(`
            SELECT * FROM Users WHERE nickname = "${nick}"
        `)

        console.log(result)
        return result
    } catch (error) {
        console.log(error)
    }
}



async function createTask(id: string, title: string, description: string, status: string, limit_date: string, creator_user_nickname: string): Promise<any> {
    try {
        const result = await connection.raw(`
            INSERT INTO Tasks_List VALUES (
                "${id}",
                "${title}",
                "${description}",
                "${status}",
                "${limit_date}",
                "${creator_user_nickname}"
            )
        `)

        return result
    } catch (error) {
        console.error('Erro ao criar tarefa')
    }
}




async function getTaskById(id: string): Promise<any> {
    try {
        const result = await connection.raw(`
            SELECT * FROM Tasks_List WHERE id = "${id}"
        `)

        return result
    } catch (error) {
        console.error('Erro ao encontrar esta Tarefa')
    }
}