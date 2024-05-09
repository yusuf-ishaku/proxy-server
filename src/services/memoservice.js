/* eslint-disable prettier/prettier */
import memotemplate from '../models/memotemplates';

export const addMemoTemplateToDb = async (body) => {
    const response = await memotemplate.create(body);
    return response;
};
export const getMemoTemplates = async () => {
    const response = await memotemplate.find();
    return response;
};

export const getMemoTemplateById = async (id) =>{
    const data = await memotemplate.find();
    const response = data.filter((x) => x.id === id);
    return response;
}