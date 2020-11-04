<template>
  <v-row id="main">
  <v-col id="left">
    <div>
      <h1>More about BoardsOnSkates</h1>
      <p id="p_about_company">BoardsOnSkates designs their own skateboards by hand.
      Skateboarding, surfing and snowboarding have escalated worldwide. When BoardsOnSkates Skateboard Company started, we never thought that our deepest passions would become what they are today. Communities around the globe are gathering to ride and change the streets. Even the hardest falls haven’t stopped us in this journey that has formed a global phenomenon.
      Since day one, BoardsOnSkates has been committed to all of the hardcore skaters who want the best stuff for their rides. But this is not about selling the best shit available in the market, it’s about making community and inspiring both old school riders and beginners. We want to motivate you. We dream about you getting out of the couch for a trip on the streets of your city, wherever you are. We want you to take a stand for your dreams in the same way you get up after you hit the ground in a skateboard fall. Like our favorite sports, BoardsOnSkates is about perseverance, hard work and passion for the simple things.</p>
      <p id="p_credit">Credit https://shitskateboardcompany.com/<a href="https://shitskateboardcompany.com/pages/about-us" target="_blank"><p id="p_credit">(https://shitskateboardcompany.com/pages/about-us)</p></a></p> 
    </div>
  </v-col>
  <v-col id="right">
      <div>
        <h1>The man behind</h1>
        <p>The main main behind BoardsOnSkates, the man, the myth, the legend is.. <br> Tobias Søllingvraa!</p>
        <v-col id="socials">
          <a href="https://www.linkedin.com/in/tobias-soellingvraa/" target="_blank"><v-row><p id="social_p"><i class="fa fa-linkedin" id="linkedin"></i>            https://www.linkedin.com/in/tobias-soellingvraa/</p></v-row></a>
          <a href="mailto: soellingvraa52@gmail.com"><v-row><p id="social_p"><i class="fa fa-envelope" id="mail"></i>            soellingvraa52@gmail.com</p></v-row></a>
        </v-col>
        <div id="foto">
      <img src="../assets/mig.jpg" alt="Billede a mig" class="curve"/>
    </div>
      </div>
  </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
#main {
  margin: 20px;
  display: flex;
}

#left, #right {
  background-color: #121212;
  border-radius: 10px 10px 10px 10px;
}

#left {
  margin-right: 10px;
  border: 3px solid white;
}

#right {
  border: 3px solid white;
}

#p_about_company {
  text-align: justify;
  padding: 0 90px 0 90px;
  margin-top: 20px;
}

#p_credit {
  font-style: italic;
  font-size: 10px;
  text-align: center;
}

a {
  text-decoration: none;
  color: white;
}

#socials {
  padding-left: 25%;
}

#social_p:hover {
  transition: all 1s ease-in-out;
  transform: scale(1.1);
}

#linkedin {
  font-size: 20px;
}

#mail {
  font-size: 20px;
}

h1 {
  text-align: center;
}

p {
   text-align: center;
   margin-top: 20px;
}

#foto {
  padding: 0 75px 0 75px;
  align-items: center;
  display: flex;
  justify-content: center;
}

#foto .curve {
  width: 80%;
  height: auto;
  min-width: 150px;
  margin-top: 20px;
  float: left;
  border-radius: 50%;
  -webkit-shape-outside: circle();
  shape-outside: circle();
}
</style>

