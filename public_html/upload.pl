#!/usr/bin/perl

use strict;
use CGI;
use Data::Dumper;

my $cgi = CGI->new;

print "Content-type: text/html\n\n";

my @handles = $cgi->multi_param('filelist');

warn scalar @handles;

foreach my $fh (@handles) {
  print "$fh<br>\n";

  my $dir = '/home/hugo/NetBeansProjects/uploader/upload/';
  open (my $out, '>', "$dir$fh" ) || die "$! - cannot open file $dir$fh";
  binmode($out);
  warn "opened $dir$fh for writing ...";
  while(<$fh>) {
    print $out $_;
  }
}

1;
