import 'package:flutter/material.dart';
import 'package:portfolio/colours.dart';
import 'package:portfolio/content/socials.dart';
import 'package:portfolio/widgets/contentBody.dart';
import 'package:portfolio/widgets/navigationBars.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Portfolio',
      theme: ThemeData(colorScheme: lightColorScheme),
      darkTheme: ThemeData(colorScheme: darkColorScheme),
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
  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        if (constraints.maxWidth >= 1000) {
          // Desktop Display
          return Scaffold(
            backgroundColor: Theme.of(context).colorScheme.background,
            appBar: DesktopBar(),
            body: Row(
              mainAxisSize: MainAxisSize.max,
              children: [
                Flexible(
                    flex: 1,
                    child: Container(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.end,
                        children: [
                          Socials(),
                          Container(
                            margin: const EdgeInsets.only(top: 20),
                            color: Theme.of(context).colorScheme.primary,
                            height: 150,
                            width: 2,
                          ),
                        ],
                      ),
                    )),
                const Flexible(flex: 11, child: ContentBody()),
              ],
            ),
          );
        } else {
          // Mobile Display
          return Scaffold(
            backgroundColor: Theme.of(context).colorScheme.background,
            appBar: MobileBar(),
            body: const ContentBody(),
          );
        }
      },
    );
  }
}
