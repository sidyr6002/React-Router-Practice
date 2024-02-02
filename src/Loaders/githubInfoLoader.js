export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/sidyr6002");
    const data = await response.json();
    console.log("Date", data);
    return data;
};