import {Request, Response} from 'express';
import {Organization} from '../entities/Organization';

export const createOrganization = async (req: Request, res: Response)=>{

    try {
        
        const {name, status} = req.body; 

        if(name === null || name ==="" || status === null || status ===""){
            return res.status(404).json({msg: 'name and status is required'});
        }

        const organization = new Organization();

        organization.name = name;

        organization.status =status;

        await organization.save();

        console.log(organization);

        return res.json(organization);

    }catch (error){

        if (error instanceof Error){
            return res.status(500).json({msg: error.message})
        }        

    }
    
    
}

export const getAll = async (req: Request, res: Response) => {
    try {
        const organization = await Organization.find();
        return res.json(organization);
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({msg: error.message});
        }        
    }    
}

export const getOrganization =async (req: Request, res: Response) => {
    try {
        const {id} = req.params;

        const organization = await Organization.findOneBy({ id_organization: parseInt (id) });

        if(organization === null  ){            
            return res.status(404).json({msg: 'Organizacion no encontrada'});
        }

        return res.json(organization)

    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({msg: error.message})
        }   
    }
    
}

export const updateOrganization =async (req: Request, res: Response) => {
    
    try {
        //const {name, status} = req.body;
        const {id} = req.params;

        const organization = await Organization.findOneBy({ id_organization: parseInt (req.params.id) });

        if (!organization) return res.status(404).json({msg: 'Organizacion no encontrada'});

        // organization.name = name;
        // organization.status =status;        
        // organization.save
        // o la linea que continua

        await Organization.update({id_organization: parseInt(id)} , req.body);

        return res.json({error: false, msj: "actualizacion exitosa"})
        

    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({msg: error.message})
        }        
    }  

}

export const deleteOrganization =async (req: Request, res: Response) => {
    try {
        const {id} = req.params;

        const result = await Organization.delete({id_organization: parseInt(id)})

        if(result.affected === 0  ){            
            return res.status(404).json({msg: 'Organizacion no encontrada'});
        }

        return res.json({error: false, msg: "eliminacion exitosa"})

    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({msg: error.message})
        }   
    }
    
}

