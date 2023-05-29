import 'package:flutter/material.dart';

class EnquiryButton extends StatelessWidget {
  const EnquiryButton({super.key});

  @override
  Widget build(BuildContext context) {
    return OutlinedButton(
      onPressed: () {},
      child: Text("Enquiries".toUpperCase()),
      style: OutlinedButton.styleFrom(
          side: BorderSide(
              color: Theme.of(context).colorScheme.primary, width: 2),
          padding: const EdgeInsets.symmetric(horizontal: 20.0, vertical: 20.0),
          shape: const BeveledRectangleBorder()),
    );
  }
}
