import supabase from "../config/db.js";


export const create_disater = async (req, res) => {
  // TODO: Implement create disaster  
    const { title, description, location_name, lat, lng, tags, owner_id } = req.body ;  
   
    let  audit_trail = [{
        action: 'create',
        user_id: owner_id,
        timestamp: new Date().toISOString()
      }]
    const location = `POINT(${lat} ${lng})` ; 
    try {  
    let {data,error }=  await supabase.from('disaters').insert(
    {
      title, description, location_name,location , tags, owner_id,audit_trail
    }) 
    if(data) res.status(200).send(data)
    else res.status(400).send(error)
    } catch (error) {
       res.status(400).send(error);
    }
  
  
};

export const get_disaters = (req, res) => {
  // TODO: Implement get disasters (optionally filter by tag)
  res.status(501).send('Not implemented');
};

export const update_disater = (req, res) => {
  // TODO: Implement update disaster by id
  res.status(501).send('Not implemented');
};

export const delete_disater = (req, res) => {
  // TODO: Implement delete disaster by id
  res.status(501).send('Not implemented');
};
