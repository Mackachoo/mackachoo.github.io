import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';

class ContentCard extends StatelessWidget {
  final String heading;
  final String content;
  final Widget? subwidget;
  final List<Image>? images;
  final bool imagethentext;
  final double itRatio;
  const ContentCard(
      {super.key,
      required this.heading,
      required this.content,
      this.subwidget,
      this.images,
      this.itRatio = 1,
      this.imagethentext = true});

  Widget textBox(BuildContext context) {
    return itRatio == double.infinity
        ? const SizedBox()
        : Expanded(
            flex: itRatio == 0 ? 1 : (1 / itRatio).round(),
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    heading,
                    style: TextStyle(
                      color: Theme.of(context).colorScheme.primary,
                      fontSize: 20,
                    ),
                  ),
                  const SizedBox(height: 8),
                  Text(content, textAlign: TextAlign.justify),
                  subwidget ?? const SizedBox()
                ],
              ),
            ),
          );
  }

  Widget imageBox() {
    // return Placeholder();
    return itRatio == 0 || images == null
        ? const SizedBox()
        : Expanded(
            flex: itRatio == double.infinity ? 1 : itRatio.round(),
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8.0),
              child: images!.length == 1
                  ? images![0]
                  : CarouselSlider(
                      items: images,
                      options: CarouselOptions(
                        // height: 400,
                        // aspectRatio: 16 / 9,
                        // viewportFraction: 0.2,
                        // initialPage: 0,
                        enableInfiniteScroll: false,
                        // reverse: false,
                        autoPlay: true,
                        autoPlayInterval: const Duration(seconds: 3),
                        autoPlayAnimationDuration:
                            const Duration(milliseconds: 800),
                        autoPlayCurve: Curves.fastOutSlowIn,
                        enlargeCenterPage: true,
                        enlargeFactor: 0.6,
                      ),
                    ),
            ),
          );
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(vertical: 20),
      color: Theme.of(context).colorScheme.background,
      child: Row(
        mainAxisSize: MainAxisSize.max,
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          imagethentext ? imageBox() : textBox(context),
          imagethentext ? textBox(context) : imageBox(),
        ],
      ),
    );
  }
}
