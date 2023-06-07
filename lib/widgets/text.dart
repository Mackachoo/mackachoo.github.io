import 'package:flutter/material.dart';

class SiteText extends StatelessWidget {
  final String text;
  final int power;
  const SiteText(this.text, {super.key, this.power = 5});

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      textAlign: power != 5 ? TextAlign.start : TextAlign.justify,
      style: TextStyle(),
    );
  }
}
