const prodcutResolver = {
    category: ({ categoryId }, { filter }, { categories }) => {
        if (filter) {
            const { name } = filter;

            return categories.filter(category => category.name === name).find(category => category.id === categoryId);
        }

        return categories.find(category => category.id === categoryId); 
    }
};

export default prodcutResolver;