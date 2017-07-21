#!/usr/bin/perl

use strict;

use CGI;
use Data::Dumper;

my $cgi = CGI->new;

print "Content-type: text/html\n\n";
print "-------------<br>\n";


my @handles = $cgi->multi_param('filelist');

warn scalar @handles;

foreach my $fh (@handles) {
  warn "$fh<br>";
  print "$fh<br>";


  my $dir = '/home/hugo/NetBeansProjects/uploader/upload/';
  open (my $out, '>', "$dir$fh" ) || die "$! - cannot open file $dir$fh";
  warn "opened $dir$fh for writing ...";
  while(<$fh>) {
    print $out $_;
  }
}

1;
