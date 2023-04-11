# Import QRCode from pyqrcode
import pyqrcode
import png
from pyqrcode import QRCode
import sys
print(sys.argv)
  
  
# String which represents the QR code
# s = "file:///Users/jasonrabinowitz/Desktop/BLLC%20Test/index.html?firstName=Jason&lastName=Rabinowitz"
s = "file:///Users/jasonrabinowitz/Desktop/BLLC%20Test/index.html?firstName="+sys.argv[1]+"&lastName="+sys.argv[2]
print(s)
  
# Generate QR code
url = pyqrcode.create(s)
  
# Create and save the svg file naming "myqr.svg"
url.svg("myqr.svg", scale = 8)
  
# Create and save the png file naming "myqr.png"
url.png('myqr.png', scale = 6)