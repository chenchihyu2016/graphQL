import { uuid } from 'uuidv4';

const mutation = {
    addCategory: (parent, { input }, { categories }) => {
        const id = uuid();
        const { name } = input;
        const newCategory = { id, name };
        const isCategoryExistent = categories.findIndex(category => category.name === name);

        if (isCategoryExistent === -1) {
            categories.push(newCategory);

            return newCategory;
        } else {
            return null;
        }
    }
};

export default mutation;