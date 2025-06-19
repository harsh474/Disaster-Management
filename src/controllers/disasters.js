import supabase from "../config/db.js";


export const create_disater = (req, res) => {
  // TODO: Implement create disaster 
  supabase.from('disaters').insert({ 
      title:req.body.title , 
      
  })
  res.status(501).send('Not implemented');
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
