# wp-gatsby-rocketseat
Implementação de um blog utilizando GatsbyJS e Wordpress

## Links Importantes:
Host Worpress: http://wp-gatsby-rocket.atwebpages.com/wordpress

## Instalando GatsbyJS:
```
npm install -g gatsby-cli
```

## Criando um projeto:
 ```
 gatsby new project_name
 ```
## Plugins importantes:

### Wordpress Source:
```
yarn add gatsby-source-wordpress
```
#### Para configurá-lo, inserir no arquivo gatsby-config.js:
```
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `wp-gatsby-rocket.atwebpages.com/wordpress`,
        protocol: 'http',
        hostingWPCOM: false,
        useACF: false,
      }
    },
```

### React SVG Plugin:
```
yarn add gatsby-plugin-react-svg
```

#### Para configurá-lo, inserir no arquivo gatsby-config.js:
```
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
```

## Bibliotecas Importantes:

### Styled components:
```
yarn add gatsby-plugin-styled-components styled-components babel-plugin-styled-components
```

#### Para configurá-lo, inserir no arquivo gatsby-config.js:
```
gatsby-plugin-styled-components,
```

### Lodash:
```
yarn add lodash
```

