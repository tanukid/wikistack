var Sequelize = require('sequelize')
var db = new Sequelize('postgres://localhost:5432/wikistack',{ logging: false})

var Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  urlTitle: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
}, {
    getterMethods: {
      route() {
        return '/wiki/' + this.urlTitle
      }
    },
    hooks: {
      beforeValidate: (post, options) => {
        if (post.urlTitle) {
          post.urlTitle = post.urlTitle.replace(/\s+/g, '_').replace(/\W/g, '')
        }
        else post.urlTitle =  Math.random().toString(36).substring(2, 7)
      }
    }
  })

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
})

module.exports = {
  db,
  Page,
  User
}
