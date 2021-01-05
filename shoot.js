AFRAME.registerComponent("bullets", {
  schema: {
    activeBulletType: { type: "string", default: "normal" },
    bulletTypes: { type: "array", default: ["normal"] },
  },
  init: function () {
    window.addEventListener("click", (e) => {
      var weapon = document.querySelector("#weapon");

      // var position=weapon.getAttribute("position")

      var bullet = document.createElement("a-entity");

      bullet.setAttribute("id", 1);
      bullet.setAttribute("material", "color", "#2B2A29");
      bullet.setAttribute("position", { x: 0, y: 4, z: 5 });

      bullet.setAttribute("velocity", { x: 0, y: 0, z: 20 });

      bullet.setAttribute("geometry", {
        primitive: "sphere",
        radius: 0.5,
      });

      bullet.setAttribute("dynamic-body", {
        shape: "sphere",
        mass: 0
      });

      weapon.appendChild(bullet);

      bullet.addEventListener("collide", function (e) {
        // console.log("Player has collided with body #" + e.detail.body.el.id);

        if(e.detail.body.el.className==="mazeWalls"){
          console.log("hit the wall");
          weapon.removeChild(bullet)
        }
        // if(e.detail.body.el.id==="floor"){
        //   console.log("hit the floor");
        // }
        // // Original entity (playerEl).
        // console.log(e.detail.target.el);

        // // Other entity, which playerEl touched.
        // console.log(e.detail.body.el);


        // // Stats about the collision (CANNON.ContactEquation).
        // console.log(e.detail.contact);
         
        // // Normal (direction) of the collision (CANNON.Vec3).
        // console.log(e.detail.contact.ni)
         
      });
    });
  },
  shoot: function () {},
});

AFRAME.registerComponent("stop-wall",{
 init:function(){
  var weapon = document.querySelector("#cam");

  weapon.addEventListener("collide", function (e) {
    console.log("Player has collided with body #" + e.detail.body.el.id);

    if(e.detail.body.el.className==="mazeWalls"){
      console.log("hit the wall");
    }
    if(e.detail.body.el.id==="floor"){
      console.log("hit the floor");
    }
    // // Original entity (playerEl).
    // console.log(e.detail.target.el);

    // // Other entity, which playerEl touched.
    // console.log(e.detail.body.el);


    // // Stats about the collision (CANNON.ContactEquation).
    // console.log(e.detail.contact);
     
    // // Normal (direction) of the collision (CANNON.Vec3).
    // console.log(e.detail.contact.ni)
     
  });
 }
})