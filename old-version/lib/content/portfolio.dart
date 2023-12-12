import 'package:flutter/material.dart';
import 'package:portfolio/service/sections.dart';
import 'package:portfolio/widgets/contentcard.dart';

Section portfolio = Section(
  title: "Portfolio",
  body: const Column(children: [
    ContentCard(
      heading: "Logaroo - Logbook App for Sports and Activities",
      content:
          "This was built using flutter as to be deployable to android, ios and web with a reactive design. The backend was done using firebase which handles user authentication and a NoSQL database.",
      images: [Image(image: AssetImage('assets/images/AND 3.0.png'))],
      imagethentext: false,
      itRatio: 0.5,
    ),
    ContentCard(
      heading: "A New Adrift - Sandbox Unity Game Demo",
      content:
          "This was a fully customizable ship frames using a coordinate system where objects can be placed onto. There was also a rough island generator which uses a mixture of marching cubes and waveform collapse",
      images: [
        Image(image: AssetImage('assets/images/AND 1.0.png')),
        Image(image: AssetImage('assets/images/AND 2.0.png')),
        Image(image: AssetImage('assets/images/AND 3.0.png')),
      ],
      imagethentext: true,
    ),
    ContentCard(
        heading:
            "Grover's Algorithm Simulation - Quantum Computing Group Project",
        content:
            "This was a Python simulation of Grover's Algorithm, which simulated qbits and the basic logic gates These gates made Oracle and Hadamard gates which then made up Grover's Algorithm. We corroborated previous results of Grover's time complexity O(√N) and provided a quadratic speedup with respect to the best classical alternative of O(N).")
  ]),
);
