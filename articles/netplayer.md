---
date: 04-20-2014
title: NetPlayer based on RaspberryPi
preface: <img src="img/netplayer/home-player.png" alt="netplayer on the shelf"/><br/>For some time I was thinking about adding a network player to my audio setup.  I use a turntable for most of the time, but for some use cases it was no good. 
tags:
  - raspberrypi
  - hifiberry
  - audio
  - hardware
---

## Network player based on RaspberryPi and Hifiberry

![NetPlayer en face](../img/netplayer/on-shelf-face-4.png)

I use a turntable for most of the time, but sometimes it wasn't best for the job.  getting up every 20 minutes to play music while working was no fun.  Another need was an internet radio. I was considering buying Mac Mini, but the price is way too high even for the used devices. I researched external DACs for RaspberryPi, but there was (is?) issue with IO on rPi. Then I found <a href="http://www.hifiberry.com/" target="_blank">Hifiberry</a> - a DAC which is connected directly to the I2S slot in RaspberryPi.  Exactly what I was looking for. Non expensive, high quality DIY device. There was some soldering involved as I wanted RCA slots in different place and RaspberryPi has no pins in I2S slot.

---

## Requirements

### Plays from a playlist

After some research on Linux distribution I have chosen <a href="http://volumio.org/" target="_blank">Volumio</a> as it uses <a href="http://www.musicpd.org/" target="_blank">MPD</a> and is advertising as audiophile weapon. Volumio is also working with Hifiberry with almost no changes. It was a pleasent surprise finding it runing ``shairport`` to stream from Apple devices.

### Plays Internet Radio

I often listen to "Trójka" Polish radio station. Unfortunately it uses some strange codec and is not working under MPD. I decided to use Mplayer to play internet radio.

### Plays music test files

What's the fun of owning a DIY network player if one can't take it and test how it sound on your friend's system? I have some space on SD where I copied few files. No need to connect to the probably unsafe local network.

---

## Logic

![buttons](../img/netplayer/buttons.png)

Device has four buttons. ``stop`` / ``radio`` / ``music`` / ``test``

If this works for you as well feel free to download the software from https://github.com/zalun/NetPlayer

<blockquote>I've made a choice to not switch off the device on a usual basis, I can always run <i>ssh</i> and <i>halt</i> it from the terminal. This however might change in the future, I consider adding a button on the back panel</blockquote>

### Stop

This is stop and restart button. I stop all clients and restart ``shairport``.
I wanted it that way to be sure everything has stopped playing even if it
wasn't run by pressing a button.

### Radio

Stations are defined in ``settings.py``. Depending on the current state pressing 
the button is either switching lates played station or switching to the next 
one on the list.

### Music

Play current song or switch to the next one in playlist.

Note: One needs to create a playlist using an MPD client on a different device.

### Test

Files are read from the directory specified in ``settings.py``. Again - Play
current song or switch to the next one.

---

## Build

![Prototype board](../img/netplayer/board.png)

Hearing that the standard impulse power source isn't good for sound I bought
a good quality assembled DIY power source. I've placed it in a separate box as
I might use it to power another device. The NetPlayer has power input and RCA
output. It connects to the network using WiFi USB dongle. All music files are
copied to the Synology NAS. Boxes used aren't pretty yet, also the buttons are
temporary. I want to design front panel with wooded buttons. There is also an 
idea to add display (LED or OLED).

![RCA](../img/netplayer/open-4-back.png)

First I've designed the device using a prototype board. After it worked well
for a week or so, I've ordered the boxes.

![Prototype board](../img/netplayer/prototype-board-1.png)

It does look well on the shelf even with the current design.

![On shelf](../img/netplayer/on-shelf-face-2.png)
