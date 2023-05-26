import 'package:flutter/material.dart';
import 'package:rive/rive.dart';

class LogoButton extends StatelessWidget {
  final String state;
  final VoidCallback? onPressed;
  const LogoButton({super.key, required this.state, this.onPressed});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      child: IconButton(
          padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 10),
          iconSize: 40,
          splashRadius: 1,
          onPressed: onPressed,
          icon: RiveAnimation.asset(
            'assets/logo.riv',
            animations: [state],
          )),
    );
  }
}
