import 'package:flutter/material.dart';
import 'package:portfolio/content/socials.dart';
import 'package:portfolio/widgets/buttons.dart';
import 'package:portfolio/widgets/logobutton.dart';
import 'package:portfolio/widgets/sectionmenu.dart';
import 'package:scroll_to_index/scroll_to_index.dart';

class MobileBar extends PreferredSize {
  final VoidCallback? onPressed;
  MobileBar({super.key, this.onPressed})
      : super(
          preferredSize: const Size.fromHeight(80),
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Hero(
                    tag: 'logo',
                    child: LogoButton(state: "toMenu", onPressed: onPressed)),
                EnquiryButton(),
              ],
            ),
          ),
        );
}

class DesktopBar extends PreferredSize {
  final AutoScrollController controller;
  DesktopBar({super.key, required this.controller})
      : super(
          preferredSize: const Size.fromHeight(100),
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                const Spacer(flex: 1),
                Flexible(
                    flex: 6,
                    child: SectionMenu(
                        axis: Axis.horizontal, controller: controller)),
                Flexible(flex: 2, child: EnquiryButton()),
              ],
            ),
          ),
        );
}

class MobileDraw extends Drawer {
  final AutoScrollController controller;
  MobileDraw({super.key, required this.controller})
      : super(
            width: 100,
            child: Padding(
              padding: const EdgeInsets.all(10.0),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                children: [
                  const LogoButton(
                    state: 'idleLogo',
                  ),
                  Flexible(
                      child: SectionMenu(
                    axis: Axis.vertical,
                    controller: controller,
                  )),
                  const Spacer(flex: 2),
                  const Flexible(child: Socials()),
                  // SizedBox(height: 10)
                ],
              ),
            ));
}
