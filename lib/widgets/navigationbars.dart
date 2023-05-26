import 'package:flutter/material.dart';
import 'package:widgets/buttons.dart';
import 'package:widgets/logoButton.dart';
import 'package:widgets/sectionmenu.dart';

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
  DesktopBar({super.key})
      : super(
          preferredSize: const Size.fromHeight(100),
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                const Spacer(flex: 1),
                const Flexible(
                    flex: 6, child: SectionMenu(axis: Axis.horizontal)),
                Flexible(flex: 2, child: EnquiryButton()),
              ],
            ),
          ),
        );
}
