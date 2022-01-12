
//EJERCICIO
//Utilizando el listado de
// repositorios que nos da la API de GITHUB (https://api.github.com)
// tomar el primer repositorio del listado y
// realizar las siguientes tareas:

// 1) Modificar el texto 'Nombre' por el nombre de usuario
// 2) Agregar el avatar del usuario
// 3) Insertar un listado de links a sus 5 primeros
// repositorios.

const baseUrl = "https://api.github.com";

const getPublicRepositories = async () => {
  const response = await fetch(`${baseUrl}/repositories`);
  const jsonResponse = await response.json();
  return jsonResponse[0];
};


/* const getRepositoriesFromOwner = async (reposEndpoint) => {
  const reposResponse = await fetch(reposEndpoint);
  const jsonReposResponse = await reposResponse.json();
  const responseRepos = jsonReposResponse.slice(0, 5);
  return responseRepos;
};

const editProfile = async () => {
  const profileData = await getPublicRepositories();
  const avatarUrl = profileData.owner.avatar_url;
  const name = profileData.owner.login;
  const userRepos = await getRepositoriesFromOwner(profileData.owner.repos_url);

  const userAvatar = document.querySelector("#avatar");
  const nameNode = document.querySelector("h1");

  nameNode.textContent = name;
  userAvatar.src = avatarUrl;

  userRepos.forEach((repo) => {
    const repoNode = document.createElement("a");
    const listNode = document.querySelector("#repos-list");
    repoNode.textContent = repo.html_url;
    repoNode.href = repo.html_url;

    listNode.appendChild(repoNode);
  });

  console.log(userRepos);
};

editProfile();
 */