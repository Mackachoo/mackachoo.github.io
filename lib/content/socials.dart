import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:service/weblink.dart';

class Socials extends StatelessWidget {
  const Socials({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        SocialButton(
            onPressed: () => openURL("https://www.linkedin.com/in/danbuxton/"),
            icon: FontAwesomeIcons.linkedin),
        SocialButton(
            onPressed: () => openURL("https://github.com/Mackachoo"),
            icon: FontAwesomeIcons.github),
        SocialButton(
            onPressed: () => openEmail("dan@dtbmail.com"),
            icon: FontAwesomeIcons.solidEnvelope),
      ],
    );
  }

  IconButton SocialButton({VoidCallback? onPressed, IconData? icon}) {
    return IconButton(
      icon: FaIcon(icon),
      splashRadius: 20.0,
      onPressed: onPressed,
    );
  }
}
