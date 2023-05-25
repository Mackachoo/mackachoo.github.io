import 'package:flutter/material.dart';
import 'package:rive/rive.dart';

class LogoButton extends StatelessWidget {
  final bool menuButton;
  const LogoButton({super.key, this.menuButton = false});

  @override
  Widget build(BuildContext context) {
    return IconButton(
        onPressed: () {},
        icon: const RiveAnimation.asset(
          'assets/rive/logo.riv',
          stateMachines: ['ScreenMachine'],
        ));
  }
}
