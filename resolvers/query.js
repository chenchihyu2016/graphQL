const Query = {
    products: (parent, { filter }, { products }) => {
        if (filter) {
            const filterKeys = Object.keys(filter);
            const filteredProducts = products.filter((product) => {
                const isAllMatch = filterKeys.every((key) => {
                    const filterValue = filter[key];
                    const productValue = product[key];
                    const valueType = typeof filterValue;

                    switch (valueType) {
                        case 'number':
                            return filterValue <= productValue;
                        case 'string':
                            return productValue.includes(filterValue);
                        case 'boolean':
                            return filterValue === productValue;
                        default:
                            return true;
                    };
                });

                return isAllMatch;
            });

            return filteredProducts;
        }

        return products;
    },
    product: (parent, { id }, { products }) => products.find(product => product.id === id),
    categories: (parent, args, { categories }) => categories,
    category: (parent, { id }, { categories }) => categories.find(category => category.id === id)
};
export default Query; 