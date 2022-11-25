# code-verifier-backend



## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.com/Santy1707/code-verifier-backend.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://gitlab.com/Santy1707/code-verifier-backend/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thank you to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README
Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

Explicación sobre la instalación de dependencias: 

hemos instalado frameworks librerias o paquetes: 

npm i express dotennv

Express: libreria de Node.js sirve para trabajar los metodos HTTP y el envio de info de la API Rest de una manera mas limpia

Dotenv: para el archivo .env que oculta todas las variables generalmente credenciales, que no queremos que sean publicas, es decir, solo las podemos ver nosotros de manera local

npm i save-dev typescript 
TypeScript: Es un lenguaje de tipado fuerte, de esta manera nos obliga a entender bien que tipo de información estamos manejando (numbers, string, etc) y codear con mucha mas precisión

npm i --save -dev @types/express y todos los demas

@type/jest, express, node, eslint/eslint-plugin nos sirven como configuracion de TypeScript con los distintos frameworks y librerias que utilizamos, para que no haya conflict entre estas, para que estas entiendan el lenguaje TypeScript

npm i --save-dev concurrently
sirve para correr varios comandos al tiempo, entonces es ejecutar varios scripts en paralelo

npm i --save-dev eslint
sirve para estandarizar el uso de JS y evitar errores, nos ayuda a aplicar buenas practicas en el proyecto, 

npm i --save-dev nodemon
sirve para que se actualize el endpoint o el servidor que esta corriendo la aplicación cada vez que hay un cambio en los archivos del mismo

npm i --save-dev jest
para las pruebas que le aplicaremos al proyecto, para el testing del mismo.

npm i --save -dev serve
convierte nuestro directorio de trabajo actual en uno virtual, el directorio estará en el localhost

npm i --save -dev webpack
sirve como emnpaquetador de modulos, tendremos distintos archivos que necesitamos ordenar de manera adecuada, y para ello usamos esta herramienta

## Scripts

### build: npx tsc
transpila el codigo de TypeScript a JS para que pueda ser ejecutado en nuestro servidor, gracias a la configuracion realizada en el archivo tsconfig.json el codigo transpilado queda guardado en dist 

### start: node dist/index.js
una vez que build ha transpilado necesitamos ejecutar ese codigo, por lo tanto entramos a la carpeta dist y ejecutamos el index

### concurrently: concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\
ejecuta al mismo tiempo gracias a concurrentle, el comando npx tsc --watch para que cada cambio en los archivos a transpliar sea transpilado inmediatamente, y nodemon -q dist/index.js para ejecutar por consiguiente el codigo ya transpilado y -q para que se mantegna mirando los cambios del index, es logico ya que al transpilar constantemente necesitamos ejecutar constantemente el codigo ya transpilado.

### serve:coverage: npm run test && cd coverage/lcov-report && npx serve
sirve para correr los test, ver el informe creado por eslint y utilizamos npx serve para ver nuestro servidor corriendo en el navegador


### variables de entorno del .env
aqui se guardaran todas las variables de configuracion necesarias en el proyecto y que por tratarse de informacion privada no queremos que sean publicas, como por ejemplo las credenciales de la conexion a la base de datos

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
