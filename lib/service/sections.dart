import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:portfolio/content/aboutme.dart';
import 'package:portfolio/content/experience.dart';
import 'package:portfolio/content/portfolio.dart';

List<Section> Sections = [aboutme, portfolio, experience];

class Section {
  String title;
  FaIcon? icon;
  Widget? body;

  Section({required this.title, this.icon, this.body});
}
