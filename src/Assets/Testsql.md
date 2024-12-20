# Sao kê khớp lệnh

DECLARE @IDNDT INT = 2002;  
DECLARE @StartDate DATE = '2023-01-01';  
DECLARE @EndDate DATE = '2024-12-31';    

EXEC [dbo].[SP_SOKELENHKHOP] @IDNDT, @StartDate, @EndDate;


# Chi tiết khớp lệnh


EXEC [dbo].[SP_CTKHOPLENH] 
    @IDNDT = 2002, 
    @MACP = 'AAA'; 


# Sở hữu cổ phiếu
EXEC [dbo].[SP_SOHUUCOPHIEU] 
    @Mandt = 2002;