document.addEventListener("DOMContentLoaded", function () {
  const users = [
    { id: 1, name: "User 1", username: "user1", isFollowed: false },
    { id: 2, name: "User 2", username: "user2", isFollowed: false },
    { id: 3, name: "User 3", username: "user3", isFollowed: false },
    { id: 4, name: "User 4", username: "user4", isFollowed: false },
    // Add more users here
  ];

  const myFriendsContainer = document.querySelector(".friend");

  // Function to render users
  function renderUsers() {
    const usersContainer = document.querySelector(".users");
    usersContainer.innerHTML = "";

    users.forEach((user) => {
      if (!user.isFollowed) {
        const userElement = createUserElement(user, "follow-btn");
        usersContainer.appendChild(userElement);
      }
    });
  }

  // Function to render My Friends
  function renderMyFriends() {
    myFriendsContainer.innerHTML = "";

    users.forEach((user) => {
      if (user.isFollowed) {
        const userElement = createUserElement(user, "unfollow-btn");
        myFriendsContainer.appendChild(userElement);
      }
    });
  }

  // Function to create user element
  function createUserElement(user, buttonClass) {
    const userElement = document.createElement("div");
    userElement.classList.add("user");

    const table = document.createElement("table");
    table.innerHTML = `
        <tr>
            <td rowspan="2"><img src="user-image-placeholder.png" class="user-image"></td>
            <td><span class="user-name">${user.name}</span></td>
        </tr>
            <td><span class="user-username">@${user.username}</span></td>
        <tr>
        </tr>
        <tr>
            <td><button class="${buttonClass}">${buttonClass === "follow-btn" ? "Follow" : "Unfollow"}</button></td>
        </tr>
    `;
    userElement.appendChild(table);
        
    const button = userElement.querySelector(`.${buttonClass}`);
    button.addEventListener("click", () => toggleFollow(user));
    
    return userElement;
  }

  

  // Function to toggle follow status
  function toggleFollow(user) {
    user.isFollowed = !user.isFollowed;
    renderUsers();
    renderMyFriends();
  }

  renderUsers();
  renderMyFriends();
});
