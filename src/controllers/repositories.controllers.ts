import {Request, Response} from 'express';

export const getAll = async (req: Request, res: Response) => {
    try {
        const repositories = [
            {
                "id": 1, "state": 604
            }, 
            {
                 "id": 2, "state": 605 
            },
            {
                "id": 3, "state": 606
            } ];
        return res.json(repositories);
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({msg: error.message});
        }        
    }    
}