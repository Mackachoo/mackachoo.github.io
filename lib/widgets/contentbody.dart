import 'package:flutter/material.dart';
import 'package:content/heading.dart';
import 'package:service/sections.dart';

class ContentBody extends StatelessWidget {
  const ContentBody({super.key});

  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: const EdgeInsets.all(8),
      children: <Widget>[const Heading()] +
          Sections.map((section) {
            return Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const SizedBox(height: 20),
                Row(
                  children: [
                    const SizedBox(width: 20),
                    Text(section.title,
                        style: TextStyle(
                            color: Theme.of(context).colorScheme.primary,
                            fontSize: 30,
                            fontWeight: FontWeight.bold)),
                    const SizedBox(width: 20),
                    Container(
                      color: Theme.of(context).colorScheme.tertiary,
                      height: 2,
                      width: MediaQuery.of(context).size.width * 0.33,
                    ),
                  ],
                ),
                const SizedBox(height: 10),
                section.body ?? Container(),
              ],
            );
          }).toList(),
    );
  }
}
