package com.fruits.durian.server;

import java.nio.charset.Charset;
import java.util.Random;

import org.apache.commons.codec.binary.Hex;

public class StringByte {
	public static void main(String argv[]) {
		System.out.println("Main StringByte");
		System.out.println("Default Charset=" + Charset.defaultCharset());
		
		String s = "This is a test";
		byte[] b = s.getBytes();
		String ns = new String(b);
		System.out.println("NewString=" + ns);
		
		byte[] b1 = new byte[4];
	    new Random().nextBytes(b1);
	    //String generatedString = new String(b1, Charset.forName("UTF-8"));
	    String generatedString = new String(b1);
	    String generatedString1 = Hex.encodeHexString(b1); 
	    System.out.println("generatedString=" + generatedString + "=  Its length=" + generatedString.length());
	    System.out.println("generatedString_1=" + generatedString1 + "=  Its length=" + generatedString1.length());
	    
	    byte[] b2 = org.jboss.resteasy.util.Hex.decodeHex(generatedString1);
	    String generatedString2 = Hex.encodeHexString(b2);
	    System.out.println("generatedString_2=" + generatedString2 + "=  Its length=" + generatedString2.length());
	    
	    int i = 10;
	}

}
