import 'package:flutter/foundation.dart';
import 'package:url_launcher/url_launcher.dart';

void openURL(String url) {
  Uri link = Uri.parse(url);
  openLink(link);
}

void openEmail(String email) {
  Uri link = Uri(scheme: 'mailto', path: email);
  openLink(link);
}

void openLink(Uri link) async {
  var urllaunchable = await canLaunchUrl(link);
  if (urllaunchable) {
    await launchUrl(link);
  } else if (kDebugMode) {
    print("URL can't be launched.");
  }
}
