import 'package:flutter/material.dart';
import 'package:portfolio/widgets/logoButton.dart';

class MobileBar extends AppBar {
  MobileBar()
      : super(
          backgroundColor: Colors.transparent,
          elevation: 0.0,
          leading: LogoButton(menuButton: true),
        );
}

class DesktopBar extends AppBar {
  DesktopBar()
      : super(
          backgroundColor: Colors.transparent,
          elevation: 0,
          leading: LogoButton(),
        );
}
