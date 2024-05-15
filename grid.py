for r in range(10):
    for c in range(10):
        print(f'<button class="square" id="{str(r)+ "," +str(c)}" onclick="move({"'" + str(r)+ "," +str(c) + "'"})"></button>')
    print()