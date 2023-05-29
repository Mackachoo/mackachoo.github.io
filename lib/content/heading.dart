import 'package:flutter/material.dart';

class Heading extends StatelessWidget {
  const Heading({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Text(
        "Hey there, I'm...",
        style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 30,
            color: Theme.of(context).colorScheme.secondary),
      ),
      const SizedBox(height: 20),
      Text(
        "Dan Buxton",
        style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 80,
            color: Theme.of(context).colorScheme.primary),
      ),
      const SizedBox(height: 20),
      const Text(
        "I'm a programmer specializing in Flutter and Unity with a background in Physics. This will be my portfolio website however it is currently under construction.",
        style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
      ),
    ]);
  }
}
