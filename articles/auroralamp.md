---
date: 04-21-2014
title: Creating Aurora night lamp
preface: <img src="{siteURL}img/aurora_lamp/home-projection.png" alt="Aurora projection"/><br/>Aurora projected on the wall. Switches on automatically when it's dark. Build with Arduino and two RGB LEDs. 
tags:
  - arduino
  - hardware
  - kids
---

## <% this.get('title') %>

*This is an actual image of the light projected by the lamp.*

![result](../img/aurora_lamp/1-projection.png)

I had this idea in mind for a while, but it took me some time to find the right solution. My child is happier when the room is slightly lit during the night. I wanted to build something which will not only provide light, but also be pretty and fun to watch. The other requirement was to make the lamp automatically switch on when the lights go off. In theory this was supposed to make her enjoy that moment. Unfortunately this part was only my wishful thinking.  

The lamp independently changes intensity of all base colors (red, green and blue) of both LEDs, using the sine function to ease the light changes near the limiting values.

---

## Parts

![board design](../img/aurora_lamp/0-schema.png)

* Arduino board
* 2 x RGB LEDs
* 6 x 200 Ohms resistors (read about the right resistors for each color)
* light sensor
* 10kOhm resistor
* a box (in this case - old iPhone 3GS packaging)
* piece of plastic - old credit/gift card
* kitchen foil
* software - https://github.com/zalun/AuroraLamp

---

## Assembly

I started with soldering the resistors to all color LEDs and the light sensor. Then after testing on the prototype board, I've removed everything from the box and put it on the side. Then I've checked how Arduino fits inside, and cut the holes for the power source (I'm using USB port). I've placed the LEDs so they will throw light towards the Arduino and used one piece removed from the box to hold them in place. There was no need for glue - board and parts fit in the box perfectly. I've cut a piece of an old hotel card to make it slighty wider than the box. Then I've covered it with a kitchen foil to form a mirror. Reflection shouldn't be perfect, it's better if there are some distortions. Then I've bent the mirror to form a bow and placed it firmly inside the box.

![open box - view from the top](../img/aurora_lamp/2-construction.png)

Reflected light is projected on to the wall through a small window.

![projection window](../img/aurora_lamp/4-box-top.jpg)

Some decoration created by the target audience made a usable product from the prototype.

![happy kid](../img/aurora_lamp/6-happykid.png)

---

## Software

Download the program from GitHub

```git clone git@github.com:zalun/AuroraLamp.git```

Upload the file to the Arduino device and all should be fine. But there are at least two things one could easily fiddle with.

Lamp switches on when the ambient light level is below the value of `BRIGHT` which might be different depending on the area (street lamps).

```const int BRIGHT = 5;```

Light intensity is calculated every `STEP` milliseconds. The lower the number the quicker the animation.

```const int STEP = 5;```
