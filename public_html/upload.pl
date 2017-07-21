#!/usr/bin/perl

use strict;

use CGI;
use Data::Dumper;

my $cgi = CGI->new;

print "Content-type: text/html\n\n";
print "-------------<br>\n";


my @handles = $cgi->multi_param('filelist');

warn scalar @handles;

for my $fh (@handles) {
  warn "$fh<br>";
  print "$fh<br>";
}




1;
