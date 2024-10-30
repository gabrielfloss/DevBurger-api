import Sequelize, { Model } from "sequelize";

export class Category extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            path: Sequelize.STRING,
            url: {
              type: Sequelize.VIRTUAL,
              get() {
                  return `http://localhost:3002/category-file/${this.path}`;
              },
          }
           
        },
        {
          sequelize,
        },
      );

      return this;
    }
}

export default Category;