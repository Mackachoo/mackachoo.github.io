import 'package:flutter/material.dart';
import 'package:portfolio/content/heading.dart';
import 'package:portfolio/main.dart';
import 'package:portfolio/service/sections.dart';
import 'package:scroll_to_index/scroll_to_index.dart';

class ContentBody extends StatelessWidget {
  final EdgeInsets? padding;
  const ContentBody({super.key, this.padding});

  @override
  Widget build(BuildContext context) {
    return ListView(
      controller: GlobalScrollController,
      padding: padding,
      children: <Widget>[const Heading()] +
          Sections.asMap()
              .map((i, section) => MapEntry(
                    i,
                    AutoScrollTag(
                      key: ValueKey(i),
                      index: i,
                      controller: GlobalScrollController,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const SizedBox(height: 50),
                          Row(
                            children: [
                              const SizedBox(width: 20),
                              Text(section.title,
                                  style: TextStyle(
                                      color:
                                          Theme.of(context).colorScheme.primary,
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
                      ),
                    ),
                  ))
              .values
              .toList(),
    );
  }
}
