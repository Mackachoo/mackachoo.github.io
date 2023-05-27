import 'package:flutter/material.dart';
import 'package:portfolio/colours.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:portfolio/content/socials.dart';
import 'package:portfolio/widgets/contentbody.dart';
import 'package:portfolio/widgets/logobutton.dart';
import 'package:portfolio/widgets/navigation.dart';
import 'package:portfolio/widgets/sectionmenu.dart';
import 'package:scroll_to_index/scroll_to_index.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Portfolio',
      theme: ThemeData(
          colorScheme: darkColorScheme,
          textTheme: GoogleFonts.karlaTextTheme()),
      // darkTheme: ThemeData(
      //     colorScheme: darkColorScheme,
      //     textTheme: GoogleFonts.karlaTextTheme()),
      home: const Home(),
    );
  }
}

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  late AutoScrollController controller;

  @override
  void initState() {
    super.initState();
    controller = AutoScrollController(
        viewportBoundaryGetter: () =>
            Rect.fromLTRB(0, 0, 0, MediaQuery.of(context).padding.bottom),
        axis: Axis.vertical);
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        if (constraints.maxWidth >= 1000) {
          // Desktop Display
          return Scaffold(
            backgroundColor: Theme.of(context).colorScheme.background,
            body: Row(
              children: [
                Flexible(
                    flex: 1,
                    child: Center(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.end,
                        children: [
                          const Hero(
                              tag: 'logo', child: LogoButton(state: "toLogo")),
                          const Spacer(),
                          const Socials(),
                          Container(
                            margin: const EdgeInsets.only(top: 20),
                            color: Theme.of(context).colorScheme.primary,
                            height: 150,
                            width: 2,
                          ),
                        ],
                      ),
                    )),
                Flexible(
                    flex: 11,
                    child: Center(
                      child: Column(
                        children: [
                          SizedBox(
                              height: 80,
                              child: DesktopBar(controller: controller)),
                          Expanded(child: ContentBody(controller: controller)),
                        ],
                      ),
                    )),
              ],
            ),
          );
        } else {
          // Mobile Display
          GlobalKey<ScaffoldState> key = GlobalKey(); // Create a GlobalKey
          return Scaffold(
            key: key,
            backgroundColor: Theme.of(context).colorScheme.background,
            appBar: MobileBar(onPressed: () => key.currentState!.openDrawer()),
            drawer: MobileDraw(controller: controller),
            body: ContentBody(controller: controller),
          );
        }
      },
    );
  }
}
