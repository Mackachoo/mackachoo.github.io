import 'package:flutter/material.dart';
import 'package:service/sections.dart';

class SectionMenu extends StatefulWidget {
  final Axis axis;
  const SectionMenu({super.key, required this.axis});

  @override
  State<SectionMenu> createState() => _SectionMenuState();
}

class _SectionMenuState extends State<SectionMenu> {
  bool visible = false;
  double width = 0.0;
  List<double> offset = [double.maxFinite, double.maxFinite];
  GlobalKey akey = GlobalKey();

  List<double> getOffset(GlobalKey button, GlobalKey animated) {
    final buttonRender = button.currentContext!.findRenderObject() as RenderBox;
    final buttonOffset = buttonRender.localToGlobal(Offset.zero);
    final animatedRender =
        animated.currentContext!.findRenderObject() as RenderBox;
    final animatedOffset = animatedRender.localToGlobal(Offset.zero);

    if (widget.axis == Axis.vertical) {
      return [
        (animatedRender.size.width - buttonRender.size.width) / 2 - 5,
        buttonOffset.dy - animatedOffset.dy + buttonRender.size.height / 2 + 5
      ];
    } else {
      return [buttonOffset.dx - animatedOffset.dx - 5, 15];
    }
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
        key: akey,
        clipBehavior: Clip.none,
        alignment: Alignment.center,
        children: [
          AnimatedPositioned(
              curve: Curves.easeInOutCubicEmphasized,
              duration: const Duration(milliseconds: 500),
              top: offset[1],
              left: offset[0],
              child: AnimatedOpacity(
                opacity: visible ? 1 : 0,
                duration: const Duration(seconds: 2),
                child: Center(
                  child: Container(
                    margin: const EdgeInsets.only(top: 5),
                    color: Theme.of(context).colorScheme.primary,
                    height: 3,
                    width: width,
                  ),
                ),
              )),
          Flex(
            direction: widget.axis,
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: Sections.map((section) {
              GlobalKey key = GlobalKey();
              return InkWell(
                key: key,
                onHover: (hover) => setState(() {
                  if (hover) {
                    visible = true;
                    width =
                        (key.currentContext!.findRenderObject() as RenderBox)
                                .size
                                .width +
                            10;
                    offset = getOffset(key, akey);
                  } else {
                    visible = false;
                  }
                }),
                onTap: () {},
                child: Text(section.title.toUpperCase(),
                    style: TextStyle(
                        color: Theme.of(context).colorScheme.onSurface)),
              );
            }).toList(),
          ),
        ]);
  }
}
