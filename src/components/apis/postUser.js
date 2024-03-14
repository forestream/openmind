const BASE_URL = "https://openmind-api.vercel.app/4-12";

const postUser = async (userName) => {
  const USER_DATA = {
    name: userName,
    team: "4-12"
  };

  try {
    const response = await fetch(`${BASE_URL}` + `/subjects/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(USER_DATA)
    });

    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
};

export default postUser;
