AOS.init();

const members = [
  {
    name: "Mulan",
    title: "Co-Founder, CEO",
    background_img: "mulan_headshot.jpeg",
  },
  {
    name: "Ariel",
    title: "Co-Founder, President",
    background_img: "ariel_headshot.jpeg",
  },
  {
    name: "Pocahontas",
    title: "CFO",
    background_img: "pocahontas_headshot.jpeg",
  },
  {
    name: "Snow White",
    title: "Frontend Developer",
    background_img: "snowwhite_headshot.jpeg",
  },
  {
    name: "Tiana",
    title: "Backend Developer",
    background_img: "tiana_headshot.jpeg",
  },
  {
    name: "Jasmine",
    title: "Fullstack Developer",
    background_img: "Jasmine_headshot.jpeg",
  },
];

const renderMembers = () => {
  const membersDiv = document.getElementById("members");

  members.map((el) => {
    const member = Object.assign(document.createElement("div"), {
      className: "member",
      style: `background-image: url('/images/${el.background_img}')`,
    });

    const details = Object.assign(document.createElement("div"), {
      className: "details",
    });
    const name = Object.assign(document.createElement("div"), {
      className: "name",
      innerHTML: el.name,
    });
    const title = Object.assign(document.createElement("div"), {
      className: "title",
      innerHTML: el.title,
    });

    details.append(name);
    details.append(title);

    member.append(details);

    membersDiv.append(member);
  });
};

const renderList = () => {
  const content = document.querySelector(".content");
  const ul = Object.assign(document.createElement("ul"));

  member.map((el) => {
    let listItem = Object.assign(document.createElement("li"));
    let div = Object.assign(document.createElement("div"));
    div.addEventListener("click", () => {
      let membersDiv = document.getElementById("members2");
      members.innerHTML = "";

      const member = Object.assign(document.createElement("div"), {
        className: "member",
        style: `background-image: url('/images/${members[num].background_img}')`,
      });

      const details = Object.assign(document.createElement("div"), {
        className: "details",
      });
      const name = Object.assign(document.createElement("div"), {
        className: "name",
        innerHTML: members[0].name,
      });
      const title = Object.assign(document.createElement("div"), {
        className: "title",
        innerHTML: members[0].title,
      });

      details.append(name);
      details.append(title);

      member.append(details);

      membersDiv.append(member);
    });

    /// append
  });
};

const changeMember = (num) => {
  let membersDiv = document.getElementById("members2");
  members.innerHTML = "";

  // const member = Object.assign(document.createElement("div"), {
  //   className: "member",
  //   style: `background-image: url('/images/${members[num].background_img}')`,
  // });

  const member = document.querySelector(".member");
  member.innerHTML = "";
  member.style.backgroundImage = `url('/images/${members[num].background_img}')`;

  const details = Object.assign(document.createElement("div"), {
    className: "details",
  });
  const name = Object.assign(document.createElement("div"), {
    className: "name",
    innerHTML: members[num].name,
  });
  const title = Object.assign(document.createElement("div"), {
    className: "title",
    innerHTML: members[num].title,
  });

  details.append(name);
  details.append(title);

  member.append(details);

  membersDiv.append(member);
};

const main = document.getElementById("main");
const loader = document.getElementById("loader");

main.style.display = "none";
loader.style.display = "block";

setTimeout(() => {
  main.style.display = "block";
  loader.style.display = "none";
}, 3000);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const testimonials = document.querySelectorAll(".testimonial");
testimonials.forEach((el) => observer.observe(el));
