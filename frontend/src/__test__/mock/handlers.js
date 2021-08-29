import { rest } from 'msw'

export const handlers = [
    rest.post("/api/search/", (req, res, ctx) =>{
        const data = {
            filter: {
                locations: [],
                types: [],
                periodicity: []
            }, 
            data: {
                aggregator: {},
                results: [],
                size: 0
            }
        }; 
        return res(
            ctx.status(200),
            ctx.json(data)
        )
    }),
    rest.get("/api/users/:username",  (req, res, ctx) =>{
        return res(
            ctx.status(200)
        )
    })
]